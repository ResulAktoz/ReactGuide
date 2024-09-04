//function Button(props) {
import classNames from "classnames"

function Button({text, variant = 'default'}) {

    return (
        <button className={classNames({
            "p-4 h-10 flex items center bg-gray-100 rounded
        })}></button>
        //<button className="p-4 h-10 flex items center bg-gray-100 rounded">{text} {variant}</button>
    )

}

export default Button