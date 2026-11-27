import StudentCard from "../components/StudentCard";
// import { Button } from "@/components/ui/button";
import StudentDetails from "@/components/StudentDetails";
import StudentForm from "@/components/StudentForm";
import { useState,useEffect } from "react";
function Dashboard(){
    const [Students,setStudents]=useState([]);

    useEffect(()=>{
    document.title="Student count"+Students.length
    },[Students])
   const addStudents=(student)=>{
    setStudents([...Students,student])

   }
    return (
        // <div className="flex-1 bg-gray-100 p-6">
        //     <h2 className="mb-5 text-2xl font-bold">
        //         Dashboard
        //     </h2>
        //     <div className="grid grid-cols-3 shadow">
        //         <StudentCard
        //         Name="viyanjana"
        //         RollNo="62"
        //         />
        //         <StudentCard
        //         Name="Rubika"
        //         RollNo="15"
        //         />
        //         <StudentCard
        //         Name="Shailu"
        //         RollNo="19"
        //         />
        //     </div>
        //   <Button>Add Student</Button>
           
        // </div>
        <>
        <h1>Dashboard</h1>
        <p>Students Count:{Students.length}</p>
        <StudentForm addOn={addStudents}/>
        {Students.map((s,index)=>(
          <StudentDetails key={index} {...s}/>
        ))  }
        </>
    )
}
  export default Dashboard