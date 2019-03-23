module.exports = function check(str, bracketsConfig) {
  // your solution
     // Запускаем функцыю с рекурсией и вырезаем пары скобок идущие подряд.
    function counter(str, bracketsConfig) {                         
      let strBrackets = str;                          //Присваиваем иходное значение скобок
      for (i = 0; i < bracketsConfig.length; i++) {   //Перебираем все скобки Config
        let brackets = bracketsConfig[i].join('');    //Находим пару и удаляем
        while (~str.indexOf(brackets)) {          
          str = str.replace(brackets, '');            //Возвращаем измененную строку
        }
      }
      if (str != strBrackets ) {                      //Проверяем изменилась ли строка посде цикла удаления скобок
        return counter(str, bracketsConfig);          //Если изменилась, то запускае цикл еще раз
      }
      return str;                                     //Возвращаем конечную строку
    }

    let newStr = counter(str, bracketsConfig);         
      if (newStr == 0) {                              
       return true;                                   //Если строка пустая то TRUE
    }
    return false;                                     //Иначе FALCE

}
