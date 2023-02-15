package com.example.server.Utils.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NotFoundException extends RuntimeException {
    public NotFoundException(int id) {
        super("Could not find in system element with id: " + id);
    }

    public NotFoundException() {
        super("Could not find in system table");
    }

}
