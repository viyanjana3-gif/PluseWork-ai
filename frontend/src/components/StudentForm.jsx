import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import studentSchema from '../lib/studentSchema'

const StudentForm = ({addOn}) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({resolver: zodResolver(studentSchema)})
    const submit=(data)=>{
        addOn(data);
        reset();
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)} >
            <input {...register("name")} placeholder="Enter the name" />
            <p>{errors.name?.message}</p>
            <input {...register("email")} placeholder="Enter the email" />
            <p>{errors.email?.message}</p>
            <input {...register("age")} placeholder="Enter the age" />
            <p>{errors.age?.message}</p>
            <select {...register("course")}>
                <option value="">Select a course</option>
                <option>CSE</option>
                <option>CSBS</option>
                <option>ECE</option>
                <option>EEE</option>
            </select>
            <p>{errors.course?.message}</p>
            <button type='submit'>add Student</button>
        </form>
    </div>
  )
}

export default StudentForm