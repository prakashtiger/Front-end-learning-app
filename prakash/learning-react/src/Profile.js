import './Profile.css'
export default function Profile({name, showContent, children}) {
    if(showContent) {
        return (
            <>
            {children} {name}                
            <div>Hello World {name}</div>                
            </>
        )
    }
    return (
        <>
        {children} {name}            
        </>
    )
}