window.addEventListener('DOMContentLoaded', function() {

  'use strict';

  let tab = this.document.querySelectorAll('.info-header-tab'),
      info = this.document.querySelector('.info-header'),
      tabContent = this.document.querySelectorAll('.info-tabcontent');
  
  /**
   * Функция для того чтобы спрятать лишние .info-tabcontent
   * 
   * @param {number} a - какой по счету .info-tabcontent оставить при загрузке
   * 
   * Функция динамическая, определяет количество .info-tabcontent и скрывает их (путем манипуляций с классами), 
   * кроме указанного в параметре функции
   */
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show'); // удалить класс show
      tabContent[i].classList.add('hide');    // добавить класс hide
    }
  }

  // скрыли все .info-tabcontent кроме первого
  hideTabContent(1);

  /**
   * Функция вывода нужного .info-tabcontent на экран, при клике на .info-header-tab
   * @param {number} b - какой таб показать
   * 
   * Если .info-tabcontent скрыт (содержит класс hide) - удалить класс hide и добавить show
   */
  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show'); 
    }
  }

  /**
   * Делигирование. Вешаем обработчик событий на родителя всех .info-tabcontent - класс .info-header
   * 
   * @var target - элемент, куда нажали
   * 
   * Если есть @var target и он содержит класс .info-header-tab (т.е. является табом)
   * пробегаемся по каждому .info-header-tab, и если .info-header-tab равен @var target - 
   * - скрываем все .info-tabcontent (указываем 0), и выводим на экран .info-tabcontent, 
   * удовлетворяющий условию.
   * 
   */
  info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]){
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  })

});