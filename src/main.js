// Search Character

const search = prompt("Search Members :");

// Filter Data From Database

const result = members.filter((data) => 
data.bloodType === search || 
data.phone === search ||
data.address === search
 );

// Final Result

const searchMember = [];

// Get Data From Database

result.forEach((item, index) => {
    searchMember.push(item);
})

// Show Data

console.table(searchMember);