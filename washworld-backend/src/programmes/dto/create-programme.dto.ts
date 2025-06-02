import { ApiProperty } from "@nestjs/swagger";

// DTO for creating a programme
export class CreateProgrammeDto {
    @ApiProperty({ example: "Quick Wash" })
    name: string;
    @ApiProperty({ example: 89 })
    price: number;
    @ApiProperty({ example: 480})
    runTimeInSeconds: number;
}
