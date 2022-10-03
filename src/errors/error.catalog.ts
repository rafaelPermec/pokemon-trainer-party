// erro de inferencia do eslint:
// eslint-disable-next-line no-shadow
enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

type ErrorResponseObject = {
  error: string;
  httpStatus: number
};

type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject

};

const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    error: 'Object not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    error: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
};

export {
  ErrorTypes,
  ErrorResponseObject,
  ErrorCatalog,
  errorCatalog,
};
