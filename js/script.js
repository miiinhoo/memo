function saveMemo() {
    var memo = document.getElementById('memoContent').value;
    if (memo.trim() === '') {
      alert('내용을 입력해주세요.');
      return;
    }

    var savedMemos = sessionStorage.getItem('memos');
    if (savedMemos) {
      savedMemos = JSON.parse(savedMemos);
    } else {
      savedMemos = [];
    }

    savedMemos.push(memo);
    sessionStorage.setItem('memos', JSON.stringify(savedMemos));

    var memoList = document.getElementById('memoList');
    var listItem = document.createElement('li');
    listItem.innerHTML = memo.replace(/\n/g, '<br>'); // 줄바꿈 처리
    memoList.appendChild(listItem);

    document.getElementById('memoContent').value = '';
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      saveMemo();
    }
  }

  window.onload = function() {
    var savedMemos = sessionStorage.getItem('memos');
    if (savedMemos) {
      savedMemos = JSON.parse(savedMemos);

      var memoList = document.getElementById('memoList');

      savedMemos.forEach(function(memo) {
        var listItem = document.createElement('li');
        listItem.innerHTML = memo.replace(/\n/g, '<br>'); // 줄바꿈 처리
        memoList.appendChild(listItem);
      });
    }
    let textSet = document.getElementById("memoList");
    let hidden = textSet.style.display = 'none';

    hidden;

    let clickFunction = document.querySelector(".saveOn");
  clickFunction.addEventListener("click",function(){
    let show = textSet.style.display = "block";
    show;
  })

  let closeFunction = document.querySelector(".closeButton");
  closeFunction.addEventListener("click",function(){
    let hidden = textSet.style.display = 'none';
    hidden;
  })

  };