const Warning = ({ warning }) => {
    return (
        <div className={warning.display ? "form-warning" : "element--hidden"}>
            <p>{warning.text}</p>
        </div>
    )
}

export default Warning;