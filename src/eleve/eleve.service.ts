import { Injectable, NotFoundException } from '@nestjs/common';
import { Eleve } from './interfaces/eleve.interface';

@Injectable()
export class EleveService {
  eleves: Eleve[] = [
    {
      id: 1,
      nom: 'kouassi',
      prenom: 'jean',
      status: true,
    },
    {
      id: 2,
      nom: 'konan',
      prenom: 'desire',
      status: false,
    },
    {
      id: 3,
      nom: 'konate',
      prenom: 'moussa',
      status: false,
    },
  ];

  findAll(): any[] {
    if (this.eleves.length) {
      return [
        {
          status: {},
          hasError: false,
          count: this.eleves.length,
          datas: [...this.eleves],
          message: 'Operation effectué avec succes',
        },
      ];
    } else {
      return [{ Message: 'Donnee innexistante' }];
    }
  }
  findOne(id: string) {
    const One = this.eleves.find((e) => e.id == Number(id));
    if (One) {
      return { count: 1, data: One };
    } else {
      return { Message: 'Donnee innexistante' };
    }
  }
  CreateOne(eleve: Eleve) {
    const newE: Eleve = {
      id: this.eleves.length + 1,
      nom: eleve.nom,
      prenom: eleve.prenom,
      status: eleve.status,
    };
    this.eleves = [...this.eleves, newE];
    return {
      count: 1,
      eleve: newE,
      message: 'Donnee enregistré  :  Operation effectué avec succes',
    };
  }
  updateOne(id: string, eleve: Eleve) {
    const update = this.eleves.find((item) => item.id == +id);
    if (!update) {
      return new NotFoundException();
    }
    if (eleve.hasOwnProperty('status')) {
      update.status = eleve.status;
    }
    if (eleve.hasOwnProperty('nom')) {
      update.nom = eleve.nom;
    }
    if (eleve.hasOwnProperty('prenom')) {
      update.prenom = eleve.prenom;
    }
    if (eleve.hasOwnProperty('id')) {
      update.id = eleve.id;
    }
    const updateEleves = this.eleves.map((item) =>
      item.id !== +id ? item : update,
    );
    this.eleves = [...updateEleves];
    console.log(update);
    const upd = {
      count: '1',
      eleve: 'update',
      message: 'Donnée modifiée :  Operation effectué avec succes',
    };
    return upd;
  }
  DeleteOne(id: string) {
    const One = this.eleves.length;
    const oneElement = this.eleves.find((item) => item.id == +id);
    this.eleves = [...this.eleves.filter((item) => item.id !== +id)];
    if (this.eleves.length < One) {
      return {
        count: 1,
        data: oneElement,
        Message: 'Donnee suprimée : Operation effectué avec succes',
      };
    } else {
      return { Message: 'Donnee innexistante' };
    }
  }
}
