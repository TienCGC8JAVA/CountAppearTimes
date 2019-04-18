let nums = [];
for (let i = 0; i < 100 ; i++)
{
    nums[i] = Math.floor(Math.random()*100);
    console.log(nums[i]);
}

function countElementValue(arr)
{
    let n = parseInt(document.getElementById("num").value);
    let count = 0;
    for (let j of arr) if (n === j) count++;
    document.getElementById("result").innerHTML = "Số lần xuất hiện của giá trị " + n + " là: " + count;
}