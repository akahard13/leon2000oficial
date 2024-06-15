<?php

namespace Database\Factories;

use App\Models\Municipio;
use Illuminate\Database\Eloquent\Factories\Factory;

class MunicipioFactory extends Factory
{
    protected $model = Municipio::class;

    // Lista de municipios por departamento
    private $municipiosPorDepartamento = [
        1 => ['Boaco', 'Camoapa', 'San José de los Remates', 'San Lorenzo', 'Santa Lucía', 'Teustepe'],
        2 => ['Jinotepe', 'Dolores', 'San Marcos', 'El Rosario', 'La Paz Carazo', 'Diriamba'],
        3 => ['Chinandega', 'El Viejo', 'Corinto', 'Chichigalpa', 'Posoltega', 'El Realejo', 'Puerto Morazón', 'Somotillo', 'Cinco Pinos', 'San Pedro del Norte', 'Santo Tomás del Norte', 'Villa Nueva'],
        4 => ['Juigalpa', 'Acoyapa', 'Santo Tomás', 'San Pedro de Lóvago', 'Comalapa'],
        5 => ['Estelí', 'Pueblo Nuevo', 'Condega', 'San Juan de Limay', 'La Trinidad'],
        6 => ['Granada', 'Nandaime', 'Diriá', 'Diriomo', 'Laguna de Apoyo'],
        7 => ['Jinotega', 'San Rafael del Norte', 'San Sebastián de Yalí', 'La Concordia', 'San José de Bocay'],
        8 => ['León', 'Nagarote', 'Telica', 'El Jicaral', 'La Paz Centro'],
        9 => ['Somoto', 'Telpaneca', 'San Lucas', 'Yalagüina', 'San Juan de Río Coco'],
        10 => ['Managua', 'Ciudad Sandino', 'Mateare', 'Ticuantepe', 'San Francisco Libre'],
        11 => ['Masaya', 'Nindirí', 'Tisma', 'Catarina', 'Niquinohomo'],
        12 => ['Matagalpa', 'San Ramón', 'Matiguás', 'Esquipulas', 'Muy Muy'],
        13 => ['Ocotal', 'Jalapa', 'Macuelizo', 'Santa María', 'Quilalí'],
        14 => ['Rivas', 'San Juan del Sur', 'Tola', 'Cárdenas', 'Potosí'],
        15 => ['San Carlos', 'Muelle de los Bueyes', 'San Miguelito', 'El Castillo', 'San Juan del Norte'],
        16 => ['Puerto Cabezas', 'Waspam', 'Bilwi', 'Bonanza', 'Prinzapolka'],
        17 => ['Bluefields', 'El Rama', 'Kukra Hill', 'Laguna de Perlas', 'Nueva Guinea']
    ];

    private $index = 0;
    private $subindex = 0;
    public function definition()
{
    $departamentos = count($this->municipiosPorDepartamento);

    // Obtener el departamento actual y sus municipios
    $departamentoId = $this->index + 1;
    $municipios = $this->municipiosPorDepartamento[$departamentoId];

    // Obtener el nombre del municipio actual y actualizar el índice
    $nombre = $municipios[$this->subindex];
    $this->subindex++;

    // Reiniciar el índice si llegamos al final de la lista de municipios
    if ($this->subindex >= count($municipios)) {
        $this->subindex = 0;
        $this->index++;
    }

    // Reiniciar el índice si llegamos al final de la lista de departamentos
    if ($this->index >= $departamentos) {
        $this->index = 0;
    }

    return [
        'nombre' => $nombre,
        'id_dpto' => $departamentoId,
    ];
}

    



}

