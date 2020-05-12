import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component{

    renderError = (meta)=> {
        if(meta.touched && meta.error){
            return (
            <div className='ui error message'>
                <div className='header'>
                    {meta.error}
                </div>
            </div>
            );}

    }

    renderInput = (formProps) =>{
        //console.log(formProps);
        return (
        <div className='form'>
            <label>  {formProps.label}    </label>
            <input {...formProps.input} autoComplete='off'/>
            {this.renderError(formProps.meta)}
        </div>
        
            );
    }

    onSubmit(formValues){
        //console.log(formValues);

    }
    render(){
    return (
        <React.Fragment>
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='title' component={this.renderInput} label='Enter Title'/>
                <Field name='description' component={this.renderInput} label='Enter description'/>
                <button className='ui button primary'>Submit</button>
            </form>
        </React.Fragment>
    );}
}

const validate = formValues =>{
    const errors = {};
    if(!formValues.title){
        errors.title = 'You must enter title';
    }
    if (!formValues.description){
        errors.description = 'You must enter description';
    }
    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);