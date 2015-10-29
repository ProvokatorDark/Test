/**
 * Created by Admin on 21/10/15.
 */
var Todo = Backbone.Model.extend({

    defaults: {
        title: 'Пустой тайтл по дефолту',
        completed: false,
        test: "Проверка новых атрибутов"
    },
    initialize: function () {
        console.log('Модель была инициализированна');
        this.on('change', function () {
            console.log('Значение данной модели были переопределенны');
        });
        this.on('change:title', function () {
            console.log('Значение title были переопределенны');
        });
    }
});
var todo1 = new Todo();
var todo2 = new Todo({
    title: 'Старый заголовок атрибута',
    completed: true
});
console.log(JSON.stringify(todo1));
console.log(JSON.stringify(todo2));
console.log(todo2.get('title'));
console.log(todo2.get('completed'));
todo2.set({
    title: "Новый заголовок тайтла"
});
console.log(todo2.get('title'));
todo2.set({
    completed: false
});
console.log(todo2.get('completed'));