// Домашнее Задание:
//
//-Напишите функцию, куда может прилетать неограниченный список названия книг.
// Функция должна выводить только те книги, в названиях которых есть буква «у»
// и отдельным списком уже все остальные книги . Использовать filter нельзя,
// напишите свою версию метода фильтр)
//
// -Напишите функцию, которая принимает неограниченное количество чисел и выводит
// их среднюю арифметическую

// 'Униженные и оскорбленные', 'Удивительное путешествие кролика Эдварда', 'Улитка на склоне', 'Финансист', 'Война и мир', 'Великий Гэтсби'


///////////Task 1//////////
function filteringBooks(...books) {
    const booksWithU = [];
    const booksWithoutU = [];

    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        if (book.includes('У' ||  'у')) {
            booksWithU.push(book);
        } else {
            booksWithoutU.push(book);
        }
    }

    console.log("Книги с буквой 'у':", booksWithU);
    console.log("Остальные книги:", booksWithoutU);
}

filteringBooks('Униженные и оскорбленные', 'Удивительное путешествие кролика Эдварда', 'Улитка на склоне', 'Финансист', 'Война и мир', 'Великий Гэтсби');


/////////Task 2//////////

function calculateAverage(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const average = sum / numbers.length;
    return average;
}


const result = calculateAverage(5,7,3,9);
console.log(result);
