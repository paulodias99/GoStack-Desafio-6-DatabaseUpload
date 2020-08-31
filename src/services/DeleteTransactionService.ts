import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Transactionsrepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(Transactionsrepository);

    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transacion does not exist');
    }
    await transactionRepository.remove(transaction);
  }
}
export default DeleteTransactionService;
