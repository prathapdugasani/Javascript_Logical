function removeDuplicate(oldarr) {
  var newarr = [];

  var len = oldarr.length;

  for (var i = 0; i < len; i++) {
    if (newarr.indexOf(oldarr[i]) === -1) {
      newarr.push(oldarr[i]);
    }
  }

  console.log(newarr);
}

removeDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 3, 4, 2]);
