xdescribe('leetcode 1279: traffic light controllerd intersection', () => {
    let currentRoadId = 1;
    
    function carArrived(carId: number, roadId: number, direction: number, turnGreen: () => void, crossCar: () => void): void {
        synchronized(() => {
            if (roadId !== currentRoadId) {
              turnGreen();
              currentRoadId = roadId;
            }
        
            crossCar(); 
          });
    }

    function synchronized(action: () => void): void {
        action();
    }

    it('test case 1 Input:, target = 5, output 2 ', () => { });
});
