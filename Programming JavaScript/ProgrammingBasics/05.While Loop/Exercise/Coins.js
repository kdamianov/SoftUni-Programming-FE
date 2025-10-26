function execute(input) {
  let stotinki = Math.floor(Number(input) * 100);
  let coins = 0;
  while (stotinki > 0) {
    if (stotinki >= 200) {
      coins++;
      stotinki -= 200;
    } else if (stotinki >= 100) {
      coins++;
      stotinki -= 100;
    } else if (stotinki >= 50) {
      coins++;
      stotinki -= 50;
    } else if (stotinki >= 20) {
      coins++;
      stotinki -= 20;
    } else if (stotinki >= 10) {
      coins++;
      stotinki -= 10;
    } else if (stotinki >= 5) {
      coins++;
      stotinki -= 5;
    } else if (stotinki >= 2) {
      coins++;
      stotinki -= 2;
    } else if (stotinki >= 1) {
      coins++;
      stotinki -= 1;
    }
  }
  console.log(coins);
}

execute(2.73);
