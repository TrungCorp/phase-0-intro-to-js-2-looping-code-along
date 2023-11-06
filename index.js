// Code your solutions in this file

function writeCards(obj,occasion)
{
    const copyArray =[]
    for(let i=0;i<obj.length;i++)
    {
        copyArray.push(`Thank you, ${obj[i]}, for the wonderful ${occasion} gift!`)
    }
    return copyArray
}
function countDown(num)
{
    for(num;num>=0;num--)
        console.log(num)
}