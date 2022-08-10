$(function () {
  let conArr = [
    'panama',
    'guatemala',
    'honduras',
    'costa',
    'colombia',
    'brazil',
    'peru',
    'ethiopia',
    'kenya',
    'rwanda',
    'malawi',
    'tanzania',
    'philippines',
    'indonesia',
    'yemen',
    'india',
  ];
  let activeKey = '';
  for (let i = 0; i < conArr.length; i++) {
    $(`#li_${conArr[i]}`).click(() => {
      for (let j = 0; j < conArr.length; j++) {
        $(`#${conArr[j]}`).removeClass('open');
        $(`#${conArr[j]} .item_card`).removeClass('isOpacity');
        $(`#li_${conArr[j]}`).removeClass('checked');
      }
      if (activeKey == conArr[i]) {
        activeKey = '';
        return;
      }
      $(`#${conArr[i]}`).addClass('open');
      $(`#${conArr[i]} .item_card`).addClass('isOpacity');
      $(`#li_${conArr[i]}`).addClass('checked');

      activeKey = conArr[i];
    });
    $(`#li_${conArr[i]}`).mouseenter(() => {
      $(`#${conArr[i]}`).addClass('highlight');
    });
    $(`#li_${conArr[i]}`).mouseleave(() => {
      $(`#${conArr[i]}`).removeClass('highlight');
    });
  }
});
