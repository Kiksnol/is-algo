# "Быстрая" сортировка

> Quick sort - рекурсивный алгоритм, основанный на принципе "Divide and Conquer" ("Разделяй и властвуй"). Выбирается какая-то опорная точка (pivot point), относительно которой массив разбивается на подмассивы, после чего эта точка ставится на нужное место в массив.

Сложность: ***O(n log(n)) - лучший/средний, O(n^2) - худший***

## Преимущества алгоритма
1. Алгоритм "Разделяй и властвуй" позволяющий легче решать задачу
2. Эффективен для массивов больших размеров
3. Занимает не много памяти

## Недостатки
1. Худшая сложность по времени - O(n^2)
2. Не лучший выбор для массивов небольших размеров
3. Нестабильная сортировка

## Реализация алгоритма №1 (опорная точка - 1й элемент)
```cpp
#include <iostream>
 
// Функция Swap меняет значения переменных местами
void swap( int *val1, int *val2 ) {
    int tmp = *val1;

    *val1 = *val2;
    *val2 = tmp;
}

// Функция разделения массива
int partition( int *arr, int start, int end ) {
    int pivot = arr[start], count = 0;

    // Находим смещение опорной точки относительно начала массива
    for (int i = start + 1; i <= end; i++) {
        if (arr[i] <= pivot)
            count++;
    }
 
    // Ставим опорную точку в правильную позицию 
    int pivotIndex = start + count;
    swap(arr[pivotIndex], arr[start]);
 
    // Сортируем левую и правую части массива относительно опорной точки
    int i = start, j = end;
    while (i < pivotIndex && j > pivotIndex) {
        // Проверяем, что элементы слева от опорной точки меньше
        while (arr[i] <= pivot) {
            i++;
        }
        // Проверяем, что элементы справа больше
        while (arr[j] > pivot) {
            j--;
        }
 
        // При необходимости меняем элемены местами
        if (i < pivotIndex && j > pivotIndex) {
            swap(arr[i++], arr[j--]);
        }
    }
 
    return pivotIndex;
}
 
// Функция "быстрой" сортировки
void quickSort( int *arr, int start, int end ) {
    if (start >= end)
        return;
 
    // Разделение массива
    int p = partition(arr, start, end);
 
    // Сортировка левой части
    quickSort(arr, start, p - 1);
 
    // Сортировка правой части
    quickSort(arr, p + 1, end);
}
 
int main( void ) {
    int size, *arr;

    std::cin >> size;

    arr = new int[size];

    for (int i = 0; i < size; i++) {
        std::cin >> arr[i];
    }   
 
    quickSort(arr, 0, n - 1);
 
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << ' ';
    }
}
```

## Реализация алгоритма №2 (опорная точка - середина)
```cpp
#include <iostream>

// Функция Swap меняет значения переменных местами
void swap( int *val1, int *val2 ) {
    int tmp = *val1;

    *val1 = *val2;
    *val2 = tmp;
}

// Функция "быстрой" сортировки
void quickSort( int *a, int size ) {
    int b = 0, e = size - 1; // b - begin, e - end

    if (size < 2)
        return;
  
    int m = a[size / 2];

    while (b <= e) {
        // Проверка на то, что элементы слева - меньше, а элементы справа - больше
        while (A[b] < m) {
            b++;
        }
        while (A[e] > m) {
            e--;
        }

        // Если слева встретилось число большее, чем опорная точка, а справа - меньшее, меняем их местами
        if (b <= e) {
            if (b != e) {
                swap(&A[b], &A[e]);
            }
            b++;
            e--;
        }
    }

    // Рекурсивный вызов сортировки для левой и правой частей
    quickSort(A, e + 1);
    quickSort(A + b, size - b);
}

int main( void ) {
    int size, *arr;

    std::cin >> size;

    arr = new int[size];

    for (int i = 0; i < size; i++) {
        std::cin >> arr[i];
    }   
 
    quickSort(arr, 0, n - 1);
 
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << ' ';
    }
}
```
## Ввод
```bash
5
9 74 -354 87 0
```

## Работа алгоритма №1
1. Выбрали 9 как опорную точку, посчитали, что её индекс в итоговом массиве равен 2 - { . . 9 . . }
2. Поменяли местами 9 и -354 -- исходный массив: { -354 74 9 87 0 }
3. Разбили массив на два подмассива { -354 74 } и { 87 0 } -- исходный массив: { -354 74 9 87 0 }
4. Меняем местами элементы, не удовлетворяющие условию (слева меньше, справа больше) : { -354 0 } и { 87 74 } -- исходный массив: { -354 0 9 87 74 }
5. В каждом из подмассивов выбрали опорную точку как первый элемент (-354 и 87 соответственно)
6. Сортируем первый подмассив:
    1. Разбили его на еще два подмассива: { } и { 0 }
    2. Больше нечего разбивать :(
    3. Делаем слева меньше, справа больше: { } и { 0 } -- тут не пришлось ничего менять местами -- исходный массив: { -354 0 9 87 74 }
7. Сортируем второй подмассив:
    1. Разбиваем его на два подмассива: { } и { 74 }
    2. Больше нечего разбивать :( 
    3. Делаем слева меньше, справа больше: { 74 } и { } -- 74 меньше 87, поэтому поменяли местами -- исходный массив: { -354 0 9 74 87}
8. Исходный массив отсортирован: УРААААА ПОБЕДА

## Работа алгоритма №2
1. Выбрали -354 как опорную точку, посчитали, ее индекс в итоговом массиве равен 0 - { -354 . . . . }
2. Поменяли местами 9 и -354 -- исходный массив: { -354 74 9 87 0 }
3. Разбили массив на два подмассива { } и { 74 9 87 0 } -- исходный массив: { -354 74 9 87 0 }
4. Меняем местами элементы, не удовлетворяющие условию (слева меньше, справа больше), всё подходит по условию, исходный массив не изменился -- исходный массив: { -354 74 9 87 0 }
5. В каждом из подмассивов выбрали опорную точку как первый элемент (ничего и 74 соответственно) 
6. Первый подмассив состоит из 0 элементов, так что его не рассматриваем
7. Сортируем второй подмассив:
    1. Разбиваем его еще на два подмассива относительно центра: { 74 } и { 87 0 }
    2. Проверяем, выполняется ли условие: не выполняется, 74 > 9, 0 < 9. Исправляем: { 0 } { 87 74 } -- исходный массив: { -354 0 9 87 74}
    3. { 0 } нет смысла разбивать на подмассивы, а вот { 87 74 } разбиваем, получаем еще два подмассива: { } и { 74 }, работаем с ними:
        1. Условие не выполняется, значит, 74 перекидываем влево: { 74 } и { } -- исходный массив: { -354 0 9 74 87}
        2. Дальше разбивать нельзя
8. Массив отсортирован: УРАА ПОБЕДА

## Вывод
```bash
-354 0 9 74 87
```
