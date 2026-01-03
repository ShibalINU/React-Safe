function Message(){
    const name = 'Henry';
    if(name)
        return <h1>Hello {name}</h1>
    return <h1>Hello What's your name?</h1>;
}

export default Message;