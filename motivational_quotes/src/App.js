import React, { useState } from 'react';

const App = () => {
    const [items, setItems] = useState(
        [
            {"text":"The only people who never fail are those who never try.", "from":"Ilka Chase"},
            {"text":"Failure is just another way to learn how to do something right.", "from":"Marian Wright Edelman"}
        ])
    return (
        <div>App</div>
    )
}
export default App
