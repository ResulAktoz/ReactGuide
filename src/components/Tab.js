import { useState , useEffect} from "react"

function Tab({children, activeTab}) {
    const [active, setActive] = useState(activeTab)

    useEffect(() => {
        setActive(activeTab) // useEffect'a activeTab degiskenini gonderiyoruz. Bu sayede, ilk render edildiginde de tablarin active olmasini sagliyoruz.  // Eski activeTab'i yok ediyoruz. Burada useEffect'in 2. parametresi, array olarak verdikleri demek, useEffect'in bu parametrelerdeki degisikliklerde tekrar 
    }, [activeTab])

    return (
        <div>
            <nav>
            {children.map((tab, idx) => (
                <button 
                onClick={() => setActive(idx)}
                className={active == idx ? 'bg-green-100' : 'bg-gray-100'} 
                key={idx}
                >
                    {tab.props.title}
                    </button>
                ))}
            </nav>
            {children [active]}
        </div>
    )
}

Tab.Panel = function({children, title}) {
    return (
        <div>
           {children}
        </div>
    )
}

export default Tab