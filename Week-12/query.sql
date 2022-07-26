-- Find the item that has minimum weight
SELECT *  FROM ITEMS WHERE WEIGHT=(SELECT min(WEIGHT) FROM ITEMS);

-- Find the different warehouses in “Pune”
SELECT WID,WNAME FROM WAREHOUSES WHERE LOWER(LOCATION) ="pune";

-- Find the details of items ordered by a customer “Mr. Patil”
SELECT i.ITEMNO,i.DESCRIPTION
FROM CUSTOMERS as cus INNER JOIN 
ORDERS as ord ON cus.CNO = ord.CNO INNER JOIN
ITEM_ORDER as io ON io.ONO = ord.ONO INNER JOIN
ITEMS as i ON i.ITEMNO=io.ITEMNO WHERE LOWER(CNAME)="mr. patil";

-- Find a Warehouse which has maximum stores.
SELECT warehouseName
FROM (SELECT 
STORES.WID,COUNT(STORES.WID)  storesCount,WAREHOUSES.WNAME warehouseName
FROM STORES INNER JOIN WAREHOUSES
ON WAREHOUSES.WID=STORES.WID
GROUP BY STORES.WID) AS T 
WHERE storesCount=(SELECT MAX(storesCount) FROM (SELECT 
STORES.WID,COUNT(STORES.WID)  storesCount,WAREHOUSES.WNAME warehouseName
FROM STORES INNER JOIN WAREHOUSES
ON WAREHOUSES.WID=STORES.WID
GROUP BY STORES.WID)AS T2);

-- Find an item which is ordered for a minimum number of times
SELECT itemId,itemDetail 
FROM (SELECT COUNT(ITEM_ORDER.ITEMNO) timesOrdered,ITEM_ORDER.ITEMNO itemId,ITEMS.DESCRIPTION itemDetail
FROM ITEMS INNER JOIN ITEM_ORDER
ON ITEMS.ITEMNO=ITEM_ORDER.ITEMNO
GROUP BY ITEM_ORDER.ITEMNO) AS TI
WHERE timesOrdered=(SELECT MIN(timesOrdered) FROM (SELECT COUNT(ITEM_ORDER.ITEMNO) timesOrdered,ITEM_ORDER.ITEMNO itemId,ITEMS.DESCRIPTION itemDetail
FROM ITEMS INNER JOIN ITEM_ORDER
ON ITEMS.ITEMNO=ITEM_ORDER.ITEMNO
GROUP BY ITEM_ORDER.ITEMNO) as T2);
