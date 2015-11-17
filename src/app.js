export default function() {
  var num = 0;

  $(`button`).on(`click`, function() {
    num++;
    $(this).html(num + ` Like`);
    if (num <= 1) {
      return true;
    } else {
      return $(this).html(num + ` Likes`);
    }
  });
}
