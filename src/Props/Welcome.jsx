
export function Welcome({name,age}){
    return(
        <div>
            <p className="bg-red-200 text-center">Welcome <strong>{name}</strong></p>
            <p className="bg-red-200 text-center">your age is {age+1}</p>
        </div>

    )
};