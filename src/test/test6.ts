/*
Необходимо реализовать абстрактный класс Logger с 2-мя методами
абстрактным - log(message): void
printDate - выводящий в log дату
К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
выводящий сначала дату, а потом заданное сообщение
 */

abstract class Logger {
  abstract logare(message: string): void;

  printDate(date: Date) {
    this.logare(date.toString());
  }
}

class MyLogger extends Logger {
  logare(message: string): void {
    console.log(message);
  }

  logWithDate(message: string) {
    this.printDate(new Date());
    this.logare(message);
  }
}

const logger = new MyLogger();
logger.logWithDate('Andrew s-a Logat!');
