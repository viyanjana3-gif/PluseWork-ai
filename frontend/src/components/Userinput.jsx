import { useState } from 'react';

const Userinput = () => {
    const [Name, setName] = useState("");

    return (
        <div>
            <h3>User Input</h3>

            <input
                type="text"
                value={Name}
                onChange={(t) => setName(t.target.value)}
                placeholder='Please Enter Name'
            />

            <p>Welcome {Name}</p>
        </div>
    );
};

export default Userinput;