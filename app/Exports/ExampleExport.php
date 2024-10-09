<?php

namespace App\Exports;

use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Modules\Base\App\Models\MstCountry;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;

class ExampleExport implements FromCollection, WithMapping, WithHeadings, WithColumnFormatting
{
    /**
    * @return \Illuminate\Support\Collection
    */

    protected $index = 0;

    public function collection()
    {
        //
        return MstCountry::get();
    }

    public function map($countries): array
    {
        return [
            ++$this->index,
            $countries->country_name,
            Date::dateTimeToExcel(Carbon::parse($countries->created_at)),
            Date::dateTimeToExcel(Carbon::parse($countries->updated_at)),
        ];
    }

    public function headings(): array
    {
        return [
            '#',
            'Country Name',
            'Created At',
            'Updated At'
        ];
    }

    public function columnFormats(): array
    {
        return [
            'C' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'D' => NumberFormat::FORMAT_DATE_DATETIME,
        ];
    }
}
