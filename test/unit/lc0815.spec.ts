import {Queue} from './commonLibs';

xdescribe('leetcode 815: bus route', () => {
    function numBusesToDestination(routes: number[][], source: number, target: number): number {
        if (source === target) {
            return 0;
        }
    
        const totalRoutes: number = routes.length;
    
        const stopsForRoute: Set<number>[] = routes.map(route => new Set(route));
    
        const graph: number[][] = new Array(totalRoutes).fill([]).map(() => []);
    
        const stopToRoutesMap: Map<number, number[]> = new Map();
    
        routes.forEach((route, i) => {
            route.forEach(stop => {
                if (!stopToRoutesMap.has(stop)) {
                    stopToRoutesMap.set(stop, []);
                }
                stopToRoutesMap.get(stop)!.push(i);
            });
        });
    
        stopToRoutesMap.forEach((routesUsingStop) => {
            routesUsingStop.forEach((routeA, i) => {
                routesUsingStop.slice(i + 1).forEach(routeB => {
                    graph[routeA].push(routeB);
                    graph[routeB].push(routeA);
                });
            });
        });
    
        const toVisit: Queue<number> = new Queue(); // Queue for BFS
        const visitedRoutes: Set<number> = new Set(); // Holds visited routes to avoid loops
        let busesTaken: number = 1;
    
        stopToRoutesMap.get(source)?.forEach(route => {
            toVisit.enque(route);
            visitedRoutes.add(route);
        });
    
        while (toVisit.length) {
            let currentLevelSize: number = toVisit.length;
            for (let i = 0; i < currentLevelSize; ++i) {
                const currentRoute: number = toVisit.deque()!;
    
                if (stopsForRoute[currentRoute].has(target)) {
                    return busesTaken;
                }
    
                graph[currentRoute].forEach(neighbourRoute => {
                    if (!visitedRoutes.has(neighbourRoute)) {
                        visitedRoutes.add(neighbourRoute);
                        toVisit.enque(neighbourRoute);
                    }
                });
            }
            busesTaken++; 
        }
    
        return -1;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
