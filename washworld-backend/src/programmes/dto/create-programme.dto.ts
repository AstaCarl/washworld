import { ApiProperty } from "@nestjs/swagger";

export class CreateProgrammeDto {
    @ApiProperty({ example: "Quick Wash" })
    name: string;
    @ApiProperty({ example: 89 })
    price: number;
    @ApiProperty({ example: 480})
    runTimeInSeconds: number;
}
