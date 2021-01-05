処理の流れなど理解しているところを雑に書き残しておく。

`/components`下にページを構成するコンポーネントを置いていて、`App.js`にてそれらを`import`して使っている。  
全てのTODOの状態(`todos`)を変えたりする関数は `/hooks/useTodo.js`の中にまとめて書いてある。

```js
// state: todos とそれを更新する関数 setTodos を定義
// todoが追加されたり、削除されたりするタイミングで setTodos を呼び出す
const [todos, setTodos] = useState([]);
```

APIと通信してデータを取得したり、更新したりする責務は `/services/todos.js`が受け持っている。

```js
// こういった関数を個別に用意して
const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

// exportする
// import先では todoService.update のような形で使用することができる。 
export default { getAll, update, delete: _delete, add };
```
