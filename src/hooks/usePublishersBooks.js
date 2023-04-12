import { useState, useEffect } from "react";
import { getBooks } from "../api/apiCalls";

export default function useGoogleBooks(query) {
  return { books, error, isLoading };
}
