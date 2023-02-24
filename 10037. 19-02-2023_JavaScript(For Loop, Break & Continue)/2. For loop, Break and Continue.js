// For Loop

for (let i=1; i<=5; i++) {
    console.log(i);    
}

// Break

for (let i = 0; i < 4; i++) {
    console.log(i);
    if (i == 2) {
      break; // End Loop
    }
}
    
// Continue

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      continue; // Skip
    }
    console.log(i);
}