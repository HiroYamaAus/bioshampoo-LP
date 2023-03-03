/* globals $ */

$('.product-pic').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },
  
  offset: '100%',
});

$('.imgs_r').waypoint({
  
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },

  offset: '100%',
});






$('.imgs_l').waypoint({
  /* .pets_imgs_l の写真を左からフェードイン */
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },

  offset: '100%',
});

$('#contact_form').on('submit', function (e) {
  var username = $('#username').val(); /* お名前 */
  var userkana = $('#userkana').val(); /* フリガナ */
  var postcode = $('#postcode').val(); /*郵便番号 */
  var city = $('#city').val(); /*市区町村*/
  var telno = $('#telno').val(); /* 電話番号 */
  var email = $('#email').val(); /* メールアドレス */
  var password = $('#password').val(); /* password */
  

  var error_text = ''; /* エラーの説明が入る変数 */

  if (username.trim() === '') {
    error_text = 'お名前を入力してください';
  } else if (userkana.trim() === '') {
    error_text = 'フリガナを入力してください';
  } else if (!userkana.match(/^[ァ-ヴ　]+$/)) {
    error_text = 'フリガナには全角のカタカナとスペースのみを入力してください';
  } else if (telno.trim() === '') {
    error_text = '電話番号を入力してください';
  } else if (!telno.match(/^0[0-9]{1,4}-[0-9]{1,4}-[0-9]{4}$/)) {
    error_text = '電話番号を正しい書式で入力してください';
  } else if (email.trim() === '') {
    error_text = 'メールアドレスを入力してください';
  } else if (
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    )
  ) {
    error_text = 'メールアドレスを正しい書式で入力してください';
  } else if (inquiry.trim() === '') {
    error_text = 'お問い合わせ内容を入力してください';
  }

  if (error_text !== '') {
    // エラーがあった場合はページ遷移を止め、エラー内容を表示する

    // ページ遷移を止める
    e.preventDefault();

    // エラー内容を表示する
    $('#form_has_error').text(error_text);
  } else {
    // エラーがない場合はエラー内容をクリアする(ページ遷移は自動で行われる)

    // 今回はサーバーにデータを送らないのでページ遷移を止める(本番では不要)
    e.preventDefault();

    // エラー内容をクリアする
    $('#form_has_error').text('');
  }
});