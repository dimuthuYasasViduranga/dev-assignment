import { useState } from "react"; 

const ObjectPath = () => {

    const [pathValue, setPathValue] = useState(null);
    const [path, setPath] = useState(null);

    const getValue = function (path, obj) {
        if (!path || !typeof path === 'string' || !path instanceof String) {
            throw new Error('String path should pass!');
        }

        path = path.split('.');
        let current = obj;

        for (const index of path.keys()) {
            current = (current[path[index]]) ? current[path[index]] : 'Not found!' ;   
        }

        return current;
    
    };
    
    const getPathValue = (path) => {
        let obj = {
            name: 'Megaport',
            address: {
            office: {
            unit: 'Level 3',
            street: '825 Ann Street',
            suburb: 'Fortitude Valley',
            city: 'Brisbane',
            state: 'Queensland',
            postcode: 4006,
            },
            },
            industry: {
            type: 'Internet and telecommunications',
            asxListed: true,
            },
            };

        let value = getValue(path, obj)
        setPath(path);
        setPathValue(typeof value === 'string' ? value : value.toString());
    }

    return ( 
        <div className="path">
            <h2>Object Path</h2>
            <p>The path value of '{path}' is {pathValue}</p>
            <button onClick={() => getPathValue('address.office.suburb')}>Get Path Value</button>
            <button onClick={() => getPathValue('industry.asxListed')}>Get Path Value</button>
        </div>
     );
}
 
export default ObjectPath;