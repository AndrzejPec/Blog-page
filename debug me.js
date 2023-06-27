  function rectangleRotation(a, b) {
    const points = [];
  
    for (let x = -a - b; x <= a + b; x++) {
      for (let y = -a - b; y <= a + b; y++) {
        const point = { x, y };
  
        if (Number.isInteger(x) && Number.isInteger(y) && 
            point.y < -point.x + a * Math.sqrt(2) && 
            point.y > -point.x - a * Math.sqrt(2) && 
            point.y > point.x - b * Math.sqrt(2) && 
            point.y < point.x + b * Math.sqrt(2)) {
          points.push(point);
        }
      }
    }
  
    return points.length;
  }
  