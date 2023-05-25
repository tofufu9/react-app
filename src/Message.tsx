
// PascalCasing
function Message() {
    //JSX: JavaScript XML. Lên babeljs.io gõ thử lệnh nếu ko có return thì React ko trả về đc
    const name = 'Tofu';
    if (name)
    return <h1>Hello {name}</h1>;
    return <h1>Hello World!</h1>;
}

export default Message;