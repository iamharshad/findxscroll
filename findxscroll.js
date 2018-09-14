<script>
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
</script>

credit;
https://css-tricks.com/findingfixing-unintended-body-overflow/