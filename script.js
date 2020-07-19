var ctx = document.getElementsByClassName('line-chart');

var chartGraph = new Chart(ctx, {
  type:'bar',
  data:{
    labels:['Jan','Fev','Mar','Abr','Mai','Jun','Jul'],
    datasets:[{
      label:"Audience per month",
      data:[270,300,500,200,800,150,350],
      borderWidth:1,
      backgroundColor:'#01B075',
      hoverBorderColor:"#037f54",
      hoverBorderWidth:2
    }]
  }
})