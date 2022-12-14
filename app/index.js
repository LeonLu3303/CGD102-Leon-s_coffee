$(function () {
  // 過場動畫
  $(`#closeAnimation`).click((e) => {
    $('.animation_opening').addClass('animation_over');
    e.preventDefault();
  });

  // 地圖pin show
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

  // Menu show mb
  for (let i = 1; i <= 5; i++) {
    if (i % 2 == 1) {
      $(`.hp_03_menu_mb:nth-child(${i})`).click(() => {
        $(`.hp_03_menu_mb:nth-child(${i})`).toggleClass('right_style_open');
        $(`.hp_03_menu_mb:nth-child(${i}) .menu_item_detail`).toggleClass(
          'menu_item_detail_open'
        );
      });
    } else if (i % 2 == 0) {
      $(`.hp_03_menu_mb:nth-child(${i})`).click(() => {
        $(`.hp_03_menu_mb:nth-child(${i})`).toggleClass('left_style_open');
        $(`.hp_03_menu_mb:nth-child(${i}) .menu_item_detail`).toggleClass(
          'menu_item_detail_open'
        );
      });
    }
  }

  // Menu show tb_dt
  for (let i = 1; i <= 5; i++) {
    $(`.p_0${i}`).click(() => {
      $('.hp_03_menu_dt_row').toggleClass(`p_0${i}_show`);
      $(`.p_0${i}`).toggleClass(`dt_left_side`);
    });
  }

  // scroll animation

  // hp_03
  window.addEventListener('scroll', () => {
    for (let i = 1; i <= 5; i++) {
      if (document.documentElement.scrollTop > 1600) {
        $(`.p_0${i}`).addClass(`p_scroll_done`);
      } else {
        $(`.p_0${i}`).removeClass(`p_scroll_done`);
      }
    }
  });
  // hp_02
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 200) {
      $(`.mb_show_up`).addClass(`block_none`);
    } else {
      $(`.mb_show_up`).removeClass(`block_none`);
    }
    if (document.documentElement.scrollTop > 400) {
      $(`.desktop_show`).addClass(`block_none`);
    } else {
      $(`.desktop_show`).removeClass(`block_none`);
    }
  });
});
