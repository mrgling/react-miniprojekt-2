import React from 'react';
// import ReactDOM from 'react-dom';
import CRUDTable,{  Fields,  Field,  CreateForm,  UpdateForm,  DeleteForm,} from 'react-crud-table';
// Component's Base CSS
import './crud.css';
import  { mockedProducts } from '../ProductList'

export default function Crud() {

  function getProductList() {
    const productListFromLS = localStorage.getItem('productList');
    if (productListFromLS) {
      return JSON.parse(productListFromLS)
    }
    localStorage.setItem('productList', JSON.stringify(mockedProducts));
    return mockedProducts;
  }

  let productList = getProductList();

    
    const DescriptionRenderer = ({ field }) => <textarea {...field} />;
    
    const SORTERS = {
        NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
        NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
        STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
        STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a)),
    };
    
    const getSorter = (data) => {
        const mapper = x => x[data.field];
        let sorter = SORTERS.STRING_ASCENDING(mapper);
        
        if (data.field === 'id') {
            sorter = data.direction === 'ascending' ?
            SORTERS.NUMBER_ASCENDING(mapper) : SORTERS.NUMBER_DESCENDING(mapper);
        } else {
            sorter = data.direction === 'ascending' ?
            SORTERS.STRING_ASCENDING(mapper) : SORTERS.STRING_DESCENDING(mapper);
        }
        
        return sorter;
    };
    
    
    let count = productList.length;
    const service = {
        fetchItems: (payload) => {
            let result = Array.from(productList);
            result = result.sort(getSorter(payload.sort));
            return Promise.resolve(result);
        },
        create: (task) => {
            count += 1;
            productList.push({
                ...task,
                id: count,
            });
            return Promise.resolve(task);
        },
        update: (data) => {
            const task = productList.find(t => t.id === data.id);
            task.name = data.name;
            task.description = data.description;
            task.url = data.url;
            return Promise.resolve(task);
        },
        delete: (data) => {
            const task = productList.find(t => t.id === data.id);
            productList = productList.filter(t => t.id !== task.id);
            return Promise.resolve(task);
        },
    };
    
    const styles = {
        container: { margin: 'auto', width: 'auto' },
    };
    
    return(        
    // const Example = () => (

        <div style={styles.container}>
            <CRUDTable
              caption="Produktlista"
              fetchItems={payload => service.fetchItems(payload)}
              >
              <Fields>
                <Field
                  name="id"
                  label="Id"
                  hideInCreateForm
                  readOnly
                  />
                <Field
                  name="name"
                  label="name"
                  placeholder="name"
                  />
                <Field
                  name="url"
                  label="url"
                  placeholder="url"
                  />
                <Field
                    name="description"
                    label="Description"
                    render={DescriptionRenderer}
                  />
                <Field
                  name="price"
                  label="price"
                  placeholder="price"
                  />
                <Field
                  name="img"
                  label="img"
                  placeholder="img"
                  />
              </Fields>
              <CreateForm
                title="Task Creation"
                message="Create a new task!"
                trigger="Create Task"
                onSubmit={task => service.create(task)}
                submitText="Create"
                validate={(values) => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = 'Please, provide task\'s title';
                  }
        
                  if (!values.description) {
                    errors.description = 'Please, provide task\'s description';
                  }
        
                  return errors;
                }}
              />
        
              <UpdateForm
                title="Task Update Process"
                message="Update task"
                trigger="Update"
                onSubmit={task => service.update(task)}
                submitText="Update"
                validate={(values) => {
                  const errors = {};
        
                  if (!values.id) {
                    errors.id = 'Please, provide id';
                  }
        
                  if (!values.name) {
                    errors.name = 'Please, provide task\'s title';
                  }

                  if (!values.url) {
                    errors.url = 'Please, provide task\'s url';
                  }
        
                  if (!values.description) {
                    errors.description = 'Please, provide task\'s description';
                  }

                  if (!values.price) {
                    errors.url = 'Please, provide task\'s price';
                  }

                  if (!values.img) {
                    errors.url = 'Please, provide task\'s img';
                  }
        
                  return errors;
                }}
              />
        
              <DeleteForm
                title="Task Delete Process"
                message="Are you sure you want to delete the task?"
                trigger="Delete"
                onSubmit={task => service.delete(task)}
                submitText="Delete"
                validate={(values) => {
                  const errors = {};
                  if (!values.id) {
                    errors.id = 'Please, provide id';
                  }
                  return errors;
                }}
              />
            </CRUDTable>
          </div>
        );
    
    

}


// Example.propTypes = {};

// ReactDOM.render(
//   <Example />,
//   document.getElementById('root')
// );