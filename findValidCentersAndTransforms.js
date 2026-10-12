
/**

 * 在矩阵内自动搜索有效中心点，返回所有能使图形完整落在边界内的变换结果

 * @param {Array} points - 原始图形的点集 [{x, y}, ...]

 * @param {number} gridWidth - 矩阵宽度

 * @param {number} gridHeight - 矩阵高度

 * @param {Array} transforms - 变换函数列表，每个函数接收点集和中心点，返回新点集

 * @returns {Object} 按变换类型分组的结果，每个结果包含中心点、变换后的点集、是否有效

 */

function findValidCentersAndTransforms(points, gridWidth, gridHeight, transforms) {

    const results = {};

    const pointSet = points.map(p => ({ x: p.x, y: p.y }));

    

    // 计算原始图形的包围盒尺寸

    const minX = Math.min(...points.map(p => p.x));

    const maxX = Math.max(...points.map(p => p.x));

    const minY = Math.min(...points.map(p => p.y));

    const maxY = Math.max(...points.map(p => p.y));

    const shapeWidth = maxX - minX;

    const shapeHeight = maxY - minY;

    

    // 候选中心点范围：确保变换后图形不超出边界

    const centerMinX = shapeWidth / 2;

    const centerMaxX = gridWidth - 1 - shapeWidth / 2;

    const centerMinY = shapeHeight / 2;

    const centerMaxY = gridHeight - 1 - shapeHeight / 2;

    

    // 遍历所有可能的整数中心点（可调整步长）

    for (let cx = Math.ceil(centerMinX); cx <= Math.floor(centerMaxX); cx++) {

        for (let cy = Math.ceil(centerMinY); cy <= Math.floor(centerMaxY); cy++) {

            const center = { x: cx, y: cy };

            

            for (const [transformName, transformFn] of Object.entries(transforms)) {

                const transformedPoints = transformFn(pointSet, center);

                const isValid = transformedPoints.every(p => 

                    p.x >= 0 && p.x < gridWidth && p.y >= 0 && p.y < gridHeight

                );

                

                if (isValid) {

                    if (!results[transformName]) results[transformName] = [];

                    results[transformName].push({

                        center: { x: cx, y: cy },

                        points: transformedPoints,

                        valid: true

                    });

                }

            }

        }

    }

    

    // 去重（基于变换后点集的字符串表示）

    for (const transformName in results) {

        const unique = new Map();

        for (const item of results[transformName]) {

            const key = item.points.map(p => `${p.x},${p.y}`).join('|');

            if (!unique.has(key)) unique.set(key, item);

        }

        results[transformName] = Array.from(unique.values());

    }

    

    return results;

}
module.exports = findValidCentersAndTransforms
// 使用示例：定义变换函数（旋转 + 镜像）

const transforms = {

    'rot0': (pts, center) => pts.map(p => ({ x: p.x, y: p.y })),

    'rot90': (pts, center) => pts.map(p => ({ 

        x: Math.round(center.x + (p.y - center.y)), 

        y: Math.round(center.y - (p.x - center.x))

    })),

    'rot180': (pts, center) => pts.map(p => ({ 

        x: Math.round(2 * center.x - p.x), 

        y: Math.round(2 * center.y - p.y)

    })),

    'rot270': (pts, center) => pts.map(p => ({ 

        x: Math.round(center.x - (p.y - center.y)), 

        y: Math.round(center.y + (p.x - center.x))

    })),

    'mirrorX': (pts, center) => pts.map(p => ({ 

        x: p.x, 

        y: Math.round(2 * center.y - p.y)

    })),

    'mirrorY': (pts, center) => pts.map(p => ({ 

        x: Math.round(2 * center.x - p.x), 

        y: p.y

    }))

};

// 调用函数

//const validResults = findValidCentersAndTransforms(originalPoints, 12, 12, transforms);

//console.log('有效结果:', validResults);