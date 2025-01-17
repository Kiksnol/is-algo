# "Выборочная" сортировка

> Selection sort - простая и эффективная сортировка, которая как и Insertion sort условно делит массив на две части (отсортированную и неотсортированную), только изначально кол-во элементов в отсортированной части - 0. Далее алгоритм ищет минимамльный элемент в неотсортированной части и добавляет его в отсортированную. Данный процесс повторяется, пока все элементы не перейдут в отсортированный массив

Сложность: ***O(n^2)***

## Преимущества алгоритма
1. Легкий для понимания и воспроизведения
2. Хорош для маленьких массивов

## Недостатки алгоритма
1. Сложность O(n^2) в худшем и среднем случаях, из-за чего для больших массивов скорость работы может стремиться к бесконечности
2. Нестабильный алгоритм

```cpp 
#include <iostream>

// Функция "выборочной" сортировки
void selectionSort( int *arr, int n ) {
    int i, j, min_ind;
 
    // Рассматривание минимального элемента в неотсортированной части и заполнение отсортировнного
    for (i = 0; i < n - 1; i++) {
        // Поиск минимального элемента(его индекса)
        min_idx = i;

        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
 
        // Замена первого элемента неотсортированного массива на его минимальный элемент
        if (min_idx != i) {
            swap(arr[min_idx], arr[i]);
        }

        // В окончании цикла совершается операция i++, которая сдвигает указатель на начало неотсортированной части массива
    }
}

int main( void ) {
    int size, *arr;

    std::cin >> size;
    
    arr = new int[size];

    for (int i = 0; i < size; i++) {
        std::cin >> arr[i];
    }

    selectionSort(arr, size);
    
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << ' ';
    }
}
```

## Ввод:
```bash 
5
12 865 -1233 47 2
```

## Работа алгоритма
Знак | отделяет отсортированную часть от неотсортированной
0. Изначальный массив: { | 12 865 -1233 47 2 }
1. Ищем минимальный элемент в массиве (-1233), меняем его местами с первым элементом, итоговый массив: { -1233 | 865 12 47 2 }
2. Повторяем: { -1233 2 | 12 47 865 }
3. { -1233 2 12 | 47 865 }
4. { -1233 2 12 47 | 865 }
5. { -1233 2 12 47 865 | } - Ура! Весь массив отсортирован! ПОБЕДАААААА!

## Вывод:
```bash
-1233 2 12 47 865
```