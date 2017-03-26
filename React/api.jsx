import React, { PropTypes } from 'react';

// <<< Stateless component >>>
function Component(props) {
    return (
        <h1>Hello, world!</h1>
    );
}



// <<< Statefull component >>>

class Component extends React.Component {
    constructor(props) {
        super(props);
        
        // Начальное состояние
        this.state = {
            todos: this.props.todos
        };
    }

    render() {
        return (
            <h1>Hello, world!</h1>
        );
    }
}

// Две формы установки состояния. Вызов setState() всегда приводит к соответствующему
// вызову render(), при условии, что shouldComponentUpdate() не возвращает false
component.setState(nextState, callback)
component.setState((prevState, props) => {
    return { myInteger: prevState.myInteger + props.step };
});

// Принудительный вызов метода render(), минуя shouldComponentUpdate(). ОДнако в дочерних компонентах
// включен полный жизнынный цикл, включая shouldComponentUpdate()
component.forceUpdate(callback)

// Сеттер, отображает имя компонента в devTools, и также при отладке.
component.displayName



// <<< Lifecycle component >>>

// TODO: добавить и описать эти методы



// <<< СВОЙСТВ ПО-УМОЛЧАНИЮ >>>

Component.defaultProps = {
    name: 'John',
    surname: 'Smith',
    age: 25
};



// <<< ВАЛИДАЦИЯ СВОЙСТВ >>>

// PropTypes позволяют проверять значения передаваемые компонентам через свойства.
// Если в компонент отправляется свойство типа неуказанного в свойстве propTypes,
// в консоли появиться предупреждение.Эти предупреждения появляются только в режиме
// разработки, т.е.пользователи приложения их не увидят.Такая проверка даёт определенную
// уверенность в том что приложение будет работать правильно.Также это является
// документацией к компоненту для тех кто будет его использовать.
Component.propTypes = {
    name: PropTypes.string
};

// Строка
PropTypes.string

// Число
PropTypes.number

// Булев тип
PropTypes.boolean

// Функция
PropTypes.function

// Объект
PropTypes.object

// Форма объекта
PropTypes.shape(object: ?)
PropTypes.shape({
    name: PropTypes.string,
    friends: PropTypes.array,
    age: PropTypes.number
});

// Одно из перечисленных значений
PropTypes.oneOf(array: ?)
PropTypes.oneOf(['debug', 'info', 'warning', 'error'])

// Один из перечисленных типов
PropTypes.oneOfType(array: ?)
PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
]);

// Экземпляр определенного класса
PropTypes.instanceOf(fn)
PropTypes.instanceOf(User)
// ... в то время как:
function User(name) {
    this.name = name;
}
let user = new User('Олег');
<Component user={user} />

// Массив
PropTypes.array

// Массив определенного типа
PropTypes.arrayOf(?)
PropTypes.arrayOf(React.PropTypes.object)

// Node (узел)
PropTypes.node

// React-элемент
PropTypes.element

// Любое
PropTypes.any

// Все свойства являются необязательными, если не указано обратного. Для того что бы
// сделать свойство обязательным каждому типу мы можем добавить свойство isRequired
PropTypes.string // опциональная строка
PropTypes.string.isRequired // обазательная строка

// Пользовательский валидатор
// React позволяет определить пользовательскую функцию- валидатор для ситуаций когда 
// встроенные валидаторы не подходят.Такая функция приминает три аргумента:
// 1. Свойства отправленные компоненту
// 2. Название проверяемого свойства
// 3. Название компонента
// Если проверка не пройдена, то для генерации предупреждения в функции необходимо выбросить ошибку (new Error())
Component.propTypes = {
    user: function(props, propName, componentName) {
        let user = props[propName];

        if (!user.isValid()) {
            return new Error('Ой...');
        }
    }
};
