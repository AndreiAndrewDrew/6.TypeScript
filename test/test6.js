"use strict";
/*
Необходимо реализовать абстрактный класс Logger с 2-мя методами
абстрактным - log(message): void
printDate - выводящий в log дату
К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
выводящий сначала дату, а потом заданное сообщение
 */
class Logger {
    printDate(date) {
        this.logare(date.toString());
    }
}
class MyLogger extends Logger {
    logare(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.logare(message);
    }
}
const logger = new MyLogger();
logger.logWithDate('Andrew s-a Logat!');
