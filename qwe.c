#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *_strdup(char *str) {
    if (str == NULL) {
        return NULL;  // Return NULL if str is NULL
    }

    // Calculate the length of the input string
    size_t len = strlen(str);

    // Allocate memory for the new string (including the null-terminator)
    char *newStr = (char *)malloc(len + 1);

    if (newStr == NULL) {
        return NULL;  // Return NULL if malloc fails
    }

    // Copy the content of the input string to the new string
    strcpy(newStr, str);

    return newStr;  // Return the pointer to the duplicated string
}

int main() {
    char *original = "Hello, World!";
    char *duplicate = _strdup(original);

    if (duplicate != NULL) {
        printf("Original: %s\n", original);
        printf("Duplicate: %s\n", duplicate);

        // Remember to free the dynamically allocated memory when done
        free(duplicate);
    } else {
        printf("Memory allocation failed.\n");
    }

    return 0;
}
