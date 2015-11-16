var num = 0;

$(`button`).click(function() {
  num++;
  $(`button`).html(num + ` Like`);
  if (num <= 1) {
    return true;
  } else {
    return $(`button`).html(num + ` Likes`);
  }
})();
